# Using `<Image>` component with priority makes `<title>` tag becomes empty

## To Reproduce

1.

```
git clone https://github.com/dulapahv/nextjs-image-priority-bug-report.git
```

2.

```
cd nextjs-image-priority-bug-report
```

3.

```
npm install
```

4.

```
npm run dev
```

5.

[http://localhost:3000/](http://localhost:3000/)

## Current vs. Expected behavior

**Example:**
<br />
Set the `<title>` tag to "My App."
`<title>My App</title>`

**Expected behavior:**
<br />
The `<title>` tag should display what the user specified in the `<title>` tag and be visible in the browser's tab as well as in the Inspect Element.

<img width="180" alt="image" src="https://imgur.com/uFWkTjo.png">

<img width="422" alt="image" src="https://imgur.com/35SueUA.png">

**Actual behavior:**
<br />
The `<title>` tag is empty. In the Inspect Element, it appears as `<title></title>` instead of `<title>My App</title>`.

<img width="181" alt="image" src="https://imgur.com/mGsjxVx.png">

<img width="423" alt="image" src="https://imgur.com/RtRPeKT.png">

Lighthouse also reports that the `<title>` is missing.

<img width="397" alt="image" src="https://imgur.com/ek0BEHl.png">

However, in the page source, the `<title>` tag is still correct.

<img width="413" alt="image" src="https://imgur.com/1xfz4ei.png">

## Verify canary release

- [x] I verified that the issue exists in the latest Next.js canary release

## Provide environment information

```
Operating System:
  Platform: win32
  Arch: x64
  Version: Windows 11 Education
Binaries:
  Node: 20.3.0
  npm: N/A
  Yarn: N/A
  pnpm: N/A
Relevant Packages:
  next: 14.0.5-canary.29
  eslint-config-next: N/A
  react: 18.2.0
  react-dom: 18.2.0
  typescript: 5.1.3
Next.js Config:
  output: N/A
```

## Which area(s) are affected? (Select all that apply)

- Image optimization (next/image,next/legacy/image)

## Additional context

I have tested my reproduction on Next 14.0.4 and 14.0.5-canary.29 as well as on different devices and browsers and still got the same result.

This bug was posted on [StackOverflow](https://stackoverflow.com/questions/75088131/using-next-js-image-component-is-making-title-empty) 11 months ago, but there's no answer, and the bug is still reproducible.

The only solution right now, as posted by the author of that StackOverflow post, is to remove the `priority` from the `<Image>` component.
