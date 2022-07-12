# Typing
from typing import List, Tuple
# Regex
import re
# List utilities
from functools import reduce


def get_rule_points(
    rule: str
) -> int:
    """
    Gets the points from a rule

    rule : str
        The rule to evaluate

    returns number The number of points of that CSS selector
    """
    if not rule:
        return 0

    first_character = rule[0]

    if first_character == ".":
        # classes
        return 10
    elif first_character == "#":
        # ids
        return 100
    elif re.match(r'[a-z]', first_character, re.IGNORECASE):
        # html tags
        return 1

    return 0


def get_specificity_points(
    instruction: str
) -> int:
    """
    Calculates the points of a CSS instruction

    instruction : str
        The CSS instruction to evaluate

    returns number The total points
    """
    selectors = instruction.split(" ")
    points = reduce(
        lambda prev, curr: prev + get_rule_points(curr),
        selectors,
        0
    )
    return points


def evaluate_css_rules(
    rules: List[str],
    ascending: bool = False
) -> List[Tuple[str, int]]:
    """
    Evaluates multiple CSS rules and sorts them

    rules : List[str]
        The rules to evaluate
    ascending : bool
        If it will be ascending, it won't by default

    returns List[Tuple[str, int]]
    """
    rules_with_specificity = map(
        lambda rule: (rule, get_specificity_points(rule)),
        rules
    )
    sorted_rules = sorted(rules_with_specificity, reverse=ascending)
    return sorted_rules


if __name__ == '__main__':
    # should evaluate classes
    assert get_rule_points("my-cool-html-tag") == 1

    # should evaluate classes
    assert get_rule_points(".my-class") == 10

    # should evaluate IDs
    assert get_rule_points("#unique-id") == 100

    # should evaluate them all together
    assert get_specificity_points(
        "#unique-id .my-class my-cool-html-tag"
    ) == 111

    # should evaluate them all together
    assert get_specificity_points(
        "#unique-id > .my-class + my-cool-html-tag"
    ) == get_specificity_points(
        "#unique-id .my-class my-cool-html-tag"
    )
