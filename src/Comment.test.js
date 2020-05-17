import { getStars } from "./Comment";

describe("getStars", () => {
  it("should return 3 full stars and 2 empty stars for rating value 3", () => {
    expect(getStars(3)).toMatchInlineSnapshot(`
      Array [
        <ForwardRef(SvgStarFilled) />,
        <ForwardRef(SvgStarFilled) />,
        <ForwardRef(SvgStarFilled) />,
        <ForwardRef(SvgStarEmpty) />,
        <ForwardRef(SvgStarEmpty) />,
      ]
    `);
  });
});
