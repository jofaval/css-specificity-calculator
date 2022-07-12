// Utilities
const { getRulePoints, getSpecificityPoints } =
  require("../specificity.utils").default;

describe("Specificity utilities", () => {
  it("should evaluate classes", () => {
    expect(getRulePoints("my-cool-html-tag")).toBe(1);
  });

  it("should evaluate classes", () => {
    expect(getRulePoints(".my-class")).toBe(10);
  });

  it("should evaluate IDs", () => {
    expect(getRulePoints("#unique-id")).toBe(100);
  });

  it("should evaluate them all together", () => {
    expect(getSpecificityPoints("#unique-id .my-class my-cool-html-tag")).toBe(
      111
    );
  });

  it("should evaluate them all together", () => {
    expect(
      getSpecificityPoints("#unique-id > .my-class + my-cool-html-tag")
    ).toBe(getSpecificityPoints("#unique-id .my-class my-cool-html-tag"));
  });
});
