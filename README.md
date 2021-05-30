# 'Verify File Checksum' Github Action

This action verifies the checksum of a given (remote) file. If the check passes, the Github Action passes.

## Inputs

### `fileUrl`

**Required** The URL of the file to check.

### `checksum`

**Required** The expected (hexadecimal) checksum of the given file.

### `algorithm`

**Required** The algorithm that has been used for calculating the checksum. Run `openssl list-message-digest-algorithms` in your terminal to check all available algorithms. Examples: `MD5`, `SHA512`, `DSA-SHA1`.

## Outputs

### `verify-result`

Does the checksum match with the given file.

## Example usage

```yaml
uses: Flurb/verify-file-checksum-action@v1
with:
  file: 'file://example.com/file.zip'
  checksum: 'd61da94811ff974fbd781ad1b396a03b'
  algorithm: 'MD5'
```
