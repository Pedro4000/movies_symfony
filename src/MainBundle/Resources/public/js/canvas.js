function init() {
    var c = document.getElementById('draw');
    return c.getContext('2d');
}

function clear(ctx) {
    ctx.clearRect(0, 0, 200, 200);
}

function PercentAnimation(ctx, percent) {
    this.ctx = ctx;
    this.speed = 4;
    this.x = 100;
    this.y = 100;
    this.radius = 50;
    
    this.setPercent = function(percent) {
        this.degrees = 360 * (percent / 100);
        this._animationOffset = this.degrees;
        this.percent = percent;
    };
    
    // Part of initialization
    this.setPercent(percent);

    this.startAnimation = function() {
        var self = this;
        clear(this.ctx);
        this._interval = setInterval(function() {
            self.drawAnimation();
        }, 10);
    };

    this.drawArc = function() {
        var startDegrees = -90;
        var endDegrees = startDegrees + this.degrees - this._animationOffset;
        // Degrees to radians
        var startAngle = startDegrees / 180 * Math.PI;
        var endAngle = endDegrees / 180 * Math.PI;
        // Draw arc
        this.setLineStyles();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, startAngle, endAngle, false);
        ctx.stroke();
        this.drawText();
    };

    this.setLineStyles = function() {
        ctx.strokeStyle = 'beige';
        ctx.lineWidth = 10;
        ctx.lineCap="round";
    };

    this.drawAnimation = function() {
        if (this._animationOffset < 0) {
            this._animationOffset = 0;
        }
        clear(this.ctx);
        this.drawArc();
        this._animationOffset -= this.speed;
        if (this._animationOffset < 0) {
            clearInterval(this._interval);
        }
    };

    this.drawText = function() {
        ctx.fillStyle = "beige";
        ctx.font = "bold 30px verdana";
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.fillText(' ' + this.percent + '%', this.x, this.y);
    };

}

/**
 * Test PercentageAnimation
 */
