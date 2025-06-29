import { legal } from '.source';
import { i18n } from '@/i18n';
import { getIconElement } from '@windrun-huaiin/base-ui';
import { InferMetaType, InferPageType, loader } from 'fumadocs-core/source';

export const legalSource = loader({
  i18n,
  baseUrl: '/legal',
  source: legal.toFumadocsSource(),
  icon: getIconElement,
});

export type Page = InferPageType<typeof legalSource>;
export type Meta = InferMetaType<typeof legalSource>;