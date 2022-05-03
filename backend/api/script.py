import matplotlib as mpl
import matplotlib.pyplot as plt
import numpy as np
from io import BytesIO
import sys
import base64
import scipy.stats

if __name__ == "__main__":
    mean = 0
    std = 1

    if(len(sys.argv) == 3):
        mean = float(sys.argv[1])
        std = float(sys.argv[2])
    else:
        pass

    # parameters for normal distribution
    xmin = mean - 3.5*std
    xmax = mean + 3.5*std

    # buffer to write plot into
    bio = BytesIO()

    # make plot
    fig, ax = plt.subplots(1,1)
    x = np.linspace(xmin, xmax, 100)
    y = scipy.stats.norm.pdf(x,mean,std)
    ax.plot(x, y)

    # save plot to buffer and write buffer to stdout
    fig.savefig(bio, format="png", dpi=100)
    sys.stdout.buffer.write(base64.b64encode(bio.getvalue()))