import {
  GradientButton,
  ImageGrid,
  ImageZoom,
  Mermaid,
  TrophyCard,
  ZiaCard,
} from "@windrun-huaiin/third-ui/fuma/mdx";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Callout } from "fumadocs-ui/components/callout";
import { File, Files, Folder } from "fumadocs-ui/components/files";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";

import { appConfig } from "@/lib/appConfig";
import { globalLucideIcons as icons } from "@windrun-huaiin/base-ui/components/server";

// Object containing globally available Fumadocs UI components
const fumadocsUiComponents = {
  Callout,
  File,
  Folder,
  Files,
  Accordion,
  Accordions,
  Tab,
  Tabs,
};

const customUiComponents = {
  TrophyCard,
  ZiaCard,
  GradientButton,
};

// 这里只是渲染层处理, 将HAST渲染为React组件, 即HTML代码
export function getMDXComponents(
  components?: MDXComponents,
): MDXComponents {
  return {
    ...defaultMdxComponents,
    // 全局处理图片放大
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    img: (props) => <ImageZoom {...(props as any)} />,
    // 全局配置的 Mermaid 组件
    Mermaid: (props) => (
      <Mermaid
        {...props}
        watermarkEnabled={appConfig.style.watermark.enabled}
        watermarkText={appConfig.style.watermark.text}
      />
    ),
    // 全局配置的 ImageGrid 组件
    ImageGrid: (props) => (
      <ImageGrid {...props} cdnBaseUrl={appConfig.style.cdnBaseUrl} />
    ),
    // 全局配置的 ImageZoom 组件
    ImageZoom: (props) => (
      <ImageZoom {...props} fallbackSrc={appConfig.style.placeHolder.image} />
    ),
    ...fumadocsUiComponents,
    ...customUiComponents,
    // 从项目统一icon库中使用
    ...icons,
    ...components,
  };
}

export const useMDXComponents = getMDXComponents;
