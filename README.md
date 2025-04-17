Input Processing: Reads JSON files containing:
Total points (n) and needed points (k)
(x,y) pairs with y-values in various bases

Base Conversion: Converts y-values to decimal using:
parseInt() for bases 2-36
Example: "111" base-2 → 7

Point Organization:
Collects (x,y) pairs
Sorts by x-value for consistency

Lagrange Interpolation:
Reconstructs polynomial using first k points
Calculates each point's contribution adjusted by others
Sums contributions to find secret (constant term at x=0)

Output: Returns rounded integer result

Key Features:
Mathematically precise polynomial reconstruction
Handles arbitrary numeric bases
Efficiently uses minimum required points
Clean, modular code structure
