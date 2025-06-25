---
title: Installation
sidebar:
  order: 2
---

## Windows: Automatic Installation

You can quickly install GLuaX on Windows using the auto-install script.
Open PowerShell and run:

```powershell
irm https://raw.githubusercontent.com/gluax-lang/gluax/main/installer/windows.ps1 | iex
```

For those who want to review the script before running it, you can view the [source code here](https://github.com/gluax-lang/gluax/blob/main/installer/windows.ps1).

---

## Manual Installation

1. Download the latest release from the [GitHub repository](https://github.com/gluax-lang/gluax/releases).
2. Extract the downloaded archive to a directory of your choice.
3. Add the GLuaX binary to your system's PATH.

```bash
# Example for Unix-based systems
export PATH=$PATH:/path/to/gluax/bin
```

4. Verify the installation by running:

```bash
gluax --version
```
