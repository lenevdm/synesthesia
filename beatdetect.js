function BeatDetect(){
    var sampleBuffer = [];
    
    this.detectBeat = function(spectrum){

        var sum = 0;

        for (var i = 0; i < spectrum.length; i++){
            //The sum for this particular moment of the sound
            sum += spectrum[i]* spectrum[i];
        }
        if(sampleBuffer.length == 60){
            // Detect a beat
            var sampleSum = 0;
            var isBeat = false;
            for (var i = 0; i < sampleBuffer.length; i++)
            {
                sampleSum += sampleBuffer[i];
            }
            var sampleAverage = sampleSum / sampleBuffer.length;
            
            // Determine variance
            var varianceSum = 0;
            for (var i = 0; i < sampleBuffer.length; i++)
            {
                varianceSum += sampleBuffer[i] - sampleAverage;
            }
            var variance = varianceSum/sampleBuffer.length;

            var m = -0.15 / (25-200);
            var b = 1 + (m * 200);
            var c = (m * variance) + b;
            
            if (sum > sampleAverage*c){
                // Set the beat
                isBeat = true;
            }
            sampleBuffer.splice(0, 1);
            sampleBuffer.push(sum);
        }
        else{
            sampleBuffer.push(sum);
        }

        return isBeat;

    };
}