const core = require('@actions/core');
const github = require('@actions/github');
const crypto = require('crypto');
const fs = require('fs')

try {
    // Create a Hash based on the given algorithm.
    const hashAccordingGivenAlgorithm = crypto.createHash(core.getInput('algorithm'));

    // Calculating checksum for given file.
    const streamGivenFile = fs.createReadStream(core.getInput('file'));
    const calculatedChecksum = hashAccordingGivenAlgorithm.update(streamGivenFile).digest('hex');

    const expectedChecksum = core.getInput('checksum');

    console.log(`Calculated checksum: ${calculatedChecksum}`);
    console.log(`Expected checksum: ${expectedChecksum}`);

    if (calculatedChecksum == expectedChecksum) {
        core.setOutput("verify-result", "Checksums are equal");
    } else {
        core.setOutput("verify-result", "Checksums are not equal");
        core.setFailed(error.message);
    }
} catch (error) {
    core.setFailed(error.message);
}