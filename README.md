# Pixel Art Maker

Thoughts on coming up with a performant solution:

1. Pixels are initially represented by individual `<div>`s. However, this approach is not only performance-dragging (rendering literally stops once we hit height & width of 200 pixels), but also very hard to <b><em><u>dynamically add and modify the pixels as a unity</u></em></b>.

It becomes tedious to keep pixel that is already painted still painted after adding/removing rows/columns.

Thus I decided to go for native html `<canvas>`. More info coming after poking around with it.
