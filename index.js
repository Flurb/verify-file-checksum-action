const core = require('@actions/core');
const crypto = require('crypto');
const fetch = require('node-fetch');

try {
    // Fetch the given file
    fetch(core.getInput('fileUrl'))
        // Create a Buffer, because we need that in the Crypto update function
        .then(res => res.buffer())
        .then(buffer => {
            const hashAccordingGivenAlgorithm = crypto.createHash(core.getInput('algorithm'));
            hashAccordingGivenAlgorithm.update(buffer);
            const calculatedChecksum = hashAccordingGivenAlgorithm.digest('hex');

            if (calculatedChecksum == core.getInput('checksum')) {
                core.setOutput("verify-result", "Checksums are equal");
            } else {
                core.setOutput("verify-result", "Checksums are not equal");
                core.setFailed("Checksums are not equal");
            }
        })
} catch (error) {
    core.setFailed(error.message);
}