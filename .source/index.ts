// @ts-nocheck -- skip type checking
import * as d_legal_1 from "../src/mdx/legal/terms.mdx?collection=legal"
import * as d_legal_0 from "../src/mdx/legal/privacy.mdx?collection=legal"
import { _runtime } from "fumadocs-mdx/runtime/next"
import * as _source from "../source.config"
export const legal = _runtime.docs<typeof _source.legal>([{ info: {"path":"privacy.mdx","fullPath":"src/mdx/legal/privacy.mdx"}, data: d_legal_0 }, { info: {"path":"terms.mdx","fullPath":"src/mdx/legal/terms.mdx"}, data: d_legal_1 }], [{"info":{"path":"meta.json","fullPath":"src/mdx/legal/meta.json"},"data":{"pages":["terms","privacy"]}}])