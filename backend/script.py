import matplotlib as mpl
import matplotlib.pyplot as plt
import numpy as np
from io import BytesIO
import base64
import sys

bio = BytesIO()
fig, ax = plt.subplots(1,1)
x = np.linspace(0, 10, 100)
y = x**2
ax.plot(x, y)
fig.savefig(bio, format="png", dpi=100)
# sys.stdout.buffer.write(bio.getbuffer())
sys.stdout.buffer.write(base64.b64encode(bio.getvalue()))