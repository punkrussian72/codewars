function rgb(r, g, b){
    if (r < 0) r = 0;
    else if (r > 255) r = 255;
    if (g < 0) g = 0;
    else if (g > 255) g = 255;
    if (b < 0) b = 0;
    else if (b > 255) b = 255;
    r = r.toString(16).toUpperCase();
    g = g.toString(16).toUpperCase();
    b = b.toString(16).toUpperCase();
    if (r === '0') r+=r;
    if (g === '0') g+=g;
    if (b === '0') b+=b;
    return `${r}${g}${b}`;
}