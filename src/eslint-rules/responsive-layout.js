/* ============================================================
   Custom ESLint rule: responsive-layout

   Guardrail that keeps the mobile-first layout system intact. It inspects
   className strings (plain and template literals) and flags the patterns
   that silently break small screens:

     1. Bare multi-column grids   `grid-cols-3`        (no breakpoint base)
     2. Oversized fixed widths    `w-[720px]`          (overflows mobile)
     3. Raw page container        `max-w-[1200px]`     (bypasses <Section>)

   A breakpoint/state prefix (anything containing ':') is treated as
   intentional and allowed (`md:grid-cols-3` and `md:w-[720px]` pass). The
   sanctioned escape hatches live in the exempt files (see eslint.config.js):
   src/components/layout/** and src/theme/**.
   ============================================================ */

/** Pull the offending tokens out of a class string. */
function violations(text) {
  const found = []
  for (const token of text.split(/\s+/)) {
    if (!token || token.includes(':')) continue // prefixed = intentional, allowed
    let m
    if ((m = /^grid-cols-(\d+)$/.exec(token)) && Number(m[1]) >= 2) {
      found.push({ token, messageId: 'bareGrid' })
    } else if ((m = /^w-\[(\d+)px\]$/.exec(token)) && Number(m[1]) > 400) {
      found.push({ token, messageId: 'fixedWidth' })
    } else if (/^max-w-\[1200px\]$/.test(token)) {
      found.push({ token, messageId: 'rawContainer' })
    }
  }
  return found
}

/** @type {import('eslint').Rule.RuleModule} */
const responsiveLayout = {
  meta: {
    type: 'problem',
    docs: { description: 'Enforce the mobile-first layout primitives over raw responsive-breaking classes' },
    schema: [],
    messages: {
      bareGrid:
        '"{{token}}" is a multi-column grid with no mobile base, so it stays multi-column on phones. Use <Grid cols={{ base, md, lg }}> or prefix with a breakpoint (e.g. md:{{token}}) plus a grid-cols-1 base.',
      fixedWidth:
        '"{{token}}" is a large fixed width that overflows narrow screens. Put decorative art in <Decor> and prefix the size (e.g. md:{{token}}), or make it responsive.',
      rawContainer:
        '"{{token}}" hardcodes the page container. Use the <Section> primitive (it applies the responsive container + gutters) instead.',
    },
  },
  create(context) {
    const check = (text, node) => {
      for (const v of violations(text)) {
        context.report({ node, messageId: v.messageId, data: { token: v.token } })
      }
    }
    return {
      Literal(node) {
        if (typeof node.value === 'string') check(node.value, node)
      },
      TemplateLiteral(node) {
        for (const quasi of node.quasis) check(quasi.value.raw, node)
      },
    }
  },
}

export default {
  rules: { 'responsive-layout': responsiveLayout },
}
