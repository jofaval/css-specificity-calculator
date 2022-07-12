// Utilities
const { handleForm } = require("../form.utils").default;

describe("Form utilities", () => {
  it("should prevent the form submitting", () => {
    const event = { preventDefault: () => null };
    jest.spyOn(event, "preventDefault");

    handleForm(event);

    expect(event.preventDefault).toHaveBeenCalled();
  });
});
