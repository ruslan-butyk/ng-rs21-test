export class ColorUtils {
  private static MAX_R = 255;
  private static MIN_R = 63;
  private static MAX_G = 81;
  private static MIN_G = 64;
  private static MAX_B = 181;
  private static MIN_B = 54;

  public static randomRGBColor(): string {
    const r: number = ColorUtils.randomInteger(ColorUtils.MIN_R, ColorUtils.MAX_R);
    const g: number = ColorUtils.randomInteger(ColorUtils.MIN_G, ColorUtils.MAX_G);
    const b: number = ColorUtils.randomInteger(ColorUtils.MIN_B, ColorUtils.MAX_B);
    return `rgb(${r}, ${g}, ${b})`;
  }

  private static randomInteger(min: number, max: number): number {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }
}
