import { getHydratedTemplateString } from "./utils/getHydratedTemplateString";

export default function(babel) {
  const { types: t } = babel

  return {
    name: 'ast-transform', // not required
    visitor: {
      StringLiteral(path, state) {
        // const s = require(state.opts.config);
        if (path.node.value === 'styled-wind')
          path.node.value = 'styled-components'
      },
      TaggedTemplateExpression(path, state) {
        path.traverse(
          {
            TemplateLiteral(path, state) {
              path.traverse(
                {
                  TemplateElement(path) {
                    const css = path.node.value.raw
                    if (css.indexOf('.') > -1 || css.indexOf('swind') > -1) {
                      path.node.value.raw = getHydratedTemplateString([
                        css,
                      ])[0].join(' \n')
                      path.node.value.cooked = getHydratedTemplateString([
                        path.node.value.cooked,
                      ])[0].join(' \n')
                    }
                  },
                },
                state
              )
            },
            StringLiteral(path) {
              const className = path.node.value
              if (
                className.indexOf('.') > -1 ||
                className.indexOf('swind') > -1
              ) {
                path.node.value = getHydratedTemplateString([
                  className,
                ])[0].join(' \n')
              }
            },
          },
          state
        )
      },
    },
  }
}
