import { rgb } from "../lib/rgb";

describe('rgb', () => {
  it('should return a rgb string in the correct format', () => {
    const expected = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;

    expect(rgb()).toEqual(expect.stringMatching(expected));
  });

  it('should return red value between 0 and 255', () => {
    const colourValues = rgb().match(/\d+/g)?.map(Number);

    expect(colourValues?.[0]).toBeGreaterThanOrEqual(0);
    expect(colourValues?.[0]).toBeLessThanOrEqual(255);
  });

  it('should return green value between 0 and 255', () => {
    const colourValues = rgb().match(/\d+/g)?.map(Number);

    expect(colourValues?.[1]).toBeGreaterThanOrEqual(0);
    expect(colourValues?.[1]).toBeLessThanOrEqual(255);
  });

  it('should return blue value between 0 and 255', () => {
    const colourValues = rgb().match(/\d+/g)?.map(Number);

    expect(colourValues?.[2]).toBeGreaterThanOrEqual(0);
    expect(colourValues?.[2]).toBeLessThanOrEqual(255);
  });
});