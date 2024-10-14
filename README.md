# @colin-r/react-components
A collection of reusable React components

## Reusable Pages

### 📗 RootPage

|Prop Name|Required|
|---|---|
|title|Yes|

### 📗 LinkBackPage

|Prop Name|Required|
|---|---|
|title|Yes|
|linkTitle|Yes|
|linkUrl|Yes|

### 📗 NotFoundPage

|Prop Name|Required|
|---|---|
|title|No|
|linkTitle|Yes|
|linkUrl|Yes|

### 📗 ErrorPage
No props...

## Reusable Components

### 📃 Title

|Prop Name|Required|
|---|---|
|title|Yes|
|classes|No|

### 📃 SubTitle

|Prop Name|Required|
|---|---|
|subtitle|No|

### 📃 ChoiceBox

|Prop Name|Required|
|---|---|
|question|Yes|
|choices [title, subTitle, url]|Yes|
It's complicated.

### 📃 LinkButton

|Prop Name|Required|
|---|---|
|title|Yes|
|subTitle|No|
|url|Yes|

### 📃 FormBox

|Prop Name|Required|
|---|---|
|formData|Yes|
It's **more** complicated...

### 📃 InputField

|Prop Name|Required|
|---|---|
|displayText|Yes|
|type|Yes|
|errorText|Yes|
|required|No|
|minimum|No|

### 📃 SubmitButton

|Prop Name|Required|
|---|---|
|submitFormCallback|Yes|
|submitButtonText|No|

### 📃 SiteHeader

|Prop Name|Required|
|---|---|
|title|Yes|

## Setup for Local Development

Install local dependencies:
```
npm install
```

To view development changes in from a separate project:
```
npm link ../react-components
```
> *Requires the separate project's server to reload to view changes.*

Publish a new version to npm:
```
TODO:
```
