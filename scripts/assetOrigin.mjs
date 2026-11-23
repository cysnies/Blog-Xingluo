/** 各生产构建共用 Pages 资产源，CI_ASSET_ORIGIN 设为空可生成独立站点。 */
export const assetOrigin = (
  process.env.CI_ASSET_ORIGIN ?? "https://blog5.tcea.top"
).replace(/\/+$/, "");
