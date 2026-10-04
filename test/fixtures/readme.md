# Fixtures

This directory contains subdirectories with potentially multiple individual fixture files.

In order to be parsed correctly by the test suite, a fixture must look like:

```txt
\__ fixtures/
    \__ [group]/
        \__ fixture.[extension] (or `[name].fixture.[extension]`)
        \__ xo.config.js
```

Fixtures are read and passed in-memory to XO, and fixes are output to a temporary `fixture.fixed.[extension]` or `[name].fixed.[extension]` file.
