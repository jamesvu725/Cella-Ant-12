// James Vu
// james.vu725@csu.fullerton.edu
// provides functions to draw rectangle, grid, and triangle

// Draw filled rect.
function draw_rect( ctx, stroke, fill ) {
    ctx.save( );
    stroke = stroke || 'white';
    fill = fill || 'black';
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    ctx.lineWidth = 5;
    ctx.rect(50, 50, canvas.width - 90, canvas.height - 90);
    ctx.stroke();
    ctx.fill();
    ctx.restore( );
}

// draw_grid
function draw_grid( rctx, rminor, rmajor, rstroke, rfill  ) {
    rctx.save( );
    rctx.strokeStyle = rstroke;
    rctx.fillStyle = rfill;
    let width = rctx.canvas.width;
    let height = rctx.canvas.height;
    for ( let ix = 50; ix < width; ix += rminor ) {
        rctx.beginPath( );
        rctx.moveTo( ix, 0 );
        rctx.lineTo( ix, height );
        rctx.lineWidth = ( ix % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( ix % rmajor == 0 ) { rctx.fillText( (ix-50)/10, ix, 10 ); }
    }
    for ( let iy = 50; iy < height; iy += rminor ) {
        rctx.beginPath( );
        rctx.moveTo( 0, iy );
        rctx.lineTo( width, iy );
        rctx.lineWidth = ( iy % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( iy % rmajor == 0 ) {rctx.fillText( (iy-50)/10, 0, iy + 10 );}
    }
    rctx.restore( );
}

// draws triangle
function draw_triangle( rctx, rp1x, rp1y, rp2x, rp2y, rp3x, rp3y ) {
    rctx.save( );
    rctx.fillStyle = "white";
    rctx.beginPath( );
    rctx.moveTo( rp1x, rp1y );
    rctx.lineTo( rp2x, rp2y );
    rctx.lineTo( rp3x, rp3y );
    rctx.closePath();
    rctx.fill();
    rctx.restore( );
}
