import matplotlib as mpl
import matplotlib.pyplot as plt
import numpy as np
from io import BytesIO
import sys
import scipy.stats

# parameters for normal distribution
xmin = -4
xmax = 4
mean = 0
std = 1

# buffer to write plot into
bio = BytesIO()

# make plot
fig, ax = plt.subplots(1,1)
x = np.linspace(xmin, xmax, 100)
y = scipy.stats.norm.pdf(x,mean,std)
ax.plot(x, y)

# save plot to buffer and write buffer to stdout
fig.savefig(bio, format="png", dpi=100)
sys.stdout.buffer.write(bio.getvalue())