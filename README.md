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
<img width="180" alt="image" src="https://github.com/vercel/next.js/assets/71577909/bd2c9361-6904-4e02-ae6c-aef9ea4c0893">
<br />
<img width="422" alt="image" src="https://github.com/vercel/next.js/assets/71577909/ae65881a-2404-44f7-aa84-e604e3773ae4">

**Actual behavior:**
<br />
The `<title>` tag is empty. In the Inspect Element, it appears as `<title></title>` instead of `<title>My App</title>`.
<img width="181" alt="image" src="https://github.com/vercel/next.js/assets/71577909/198db85f-1b1f-4fe7-9524-5af950504c8b">
<br />
<img width="423" alt="image" src="https://github.com/vercel/next.js/assets/71577909/3dce7f4f-2eba-4cc2-b027-6675eac676a2">

Lighthouse also reports that the `<title>` is missing.

<img width="397" alt="image" src="https://github.com/vercel/next.js/assets/71577909/9d4927b5-5158-4abe-9c19-24b04fdf0768">

However, in the page source, the `<title>` tag is still correct.

<img width="413" alt="image" src="https://github.com/vercel/next.js/assets/71577909/7d92c2ce-f305-4407-89bb-347100eeb093">

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
