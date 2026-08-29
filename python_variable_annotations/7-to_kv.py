#!/usr/bin/env python3

"""Module for converting a key and value to a tuple."""

from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple containing a key and the square of a value."""
    return (k, v ** 2)
