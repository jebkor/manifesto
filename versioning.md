# Semantic versioning
Semantic versioning (SV) is considered the industry standard, and is the versioning I like to use, when it comes to software.
It is build up with three numbers, in a x.y.z, also referred to as MAJOR.MINOR.PATCH.

## PATCH (HOTFIX)
This is the third number in SV and describes the bugfixes (and by extension, hotfixes). Whenever there is an update to the software in the bugfix or hotfix kind-of-update, this is the number we increment. When
we are about to go from 9 to the next number, the next number becomes 10, unless a MINOR version
gets incremented, then PATCH becomes 0 and starts all over.

## MINOR
This is the second number in SV and gets incremented when a new feature is added to the software. Some also increment this number, when updates are made to a previously added feature. Others increment PATCH instead.

## MAJOR
This is the first number in SV and gets incremented when breaking changes are added to the software. This number is rarely used, because major updates happen in rare occasions.

## Examples of SV
Here are some obligatory examples of SV:

* **v0.1.2** - This is an example of an API or some software that is still in development, and hasn't been made public yet
* **v1.6.9** - This means that the software is on the `9th` patch of the `6th` minor update to version 1
* **v2.13.256** - To emphasize, this is the `256th` patch of the `13th` minor update to version 2



