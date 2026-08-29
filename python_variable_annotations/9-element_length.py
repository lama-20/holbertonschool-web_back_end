#!/usr/bin/env python3

"""Module for calculating the length of elements in an iterable."""

from typing import Iterable, List, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Return a list of each element and its length."""
    return [(i, len(i)) for i in lst]
