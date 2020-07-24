import { ChartOptions, ChartType } from 'chart.js';

import { ColorUtils } from '../util/color.utils';

export abstract class ChartComponent {
  protected colorMap = new Map<string, string>();
  public colors = [];

  constructor(public options: ChartOptions, public readonly chartType: ChartType) {
  }

  protected preFillColorMap(data: string[]): void {
    data.forEach((item: string) => {
      const prevColor = this.colorMap.get(item);
      const color = ColorUtils.randomRGBColor();
      if (!prevColor) {
        this.colorMap.set(item, color);
      }
    });
  }
}
