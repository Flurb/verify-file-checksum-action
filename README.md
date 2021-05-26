# Verify File Checksum action

This action verifies the checksum of a given file. If it passes, the Github Action passes.

## Inputs

### `file`

**Required** The file to check. If it's an URL, use the [`file:`](https://en.wikipedia.org/wiki/File_URI_scheme) protocol.

### `checksum`

**Required** The expected (hexadecimal) checksum of the given file.

### `algorithm`

**Required** The algorithm that has been used for calculating the checksum. Run `openssl list-message-digest-algorithms` in your terminal to check all available algorithms. Examples: `MD5`, `SHA512`, `DSA-SHA1`.

## Outputs

### `verify-result`

Does the checksum match with the given file.

## Example usage

```yaml
uses: actions/hello-world-javascript-action@v1.1
with:
  file: 'file://assets.iec.ch/public/tc57/IEC_61850-6.2018.SCL.2007B4.full.zip'
  checksum: 'd61da94836ff974fbd781ad1bc967039'
  algorithm: 'MD5'
```