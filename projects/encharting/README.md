# Getting Started

Encharting is an Angular library designed to simplify the process of 2D charts generation.

# Installation

After creating a new Angular project simply run:

```properties
npm install encharting --save
``` 

# Usage

- Firstly, import EnchartingModule in your app module (or any other proper Angular module).
  
    ```typescript
    import { EnchartingModule } from 'encharting';

    @NgModule({
        imports: [
            EnchartingModule
        ],
    })
    export class AppModule {}
    ```
- Then use the **encharting** directive in the HTML of your Angular component:
  
  ```html
  <div encharting></div>
  ```

# Input API

| Name                    | Type            | Default            | Description                                            |
| ----------------------- | --------------- | ------------------ | ------------------------------------------------------ |
| **@Input** [config]     | Chart           | { components: [] } | The chart configuration object                         |
| **@Input** [width]      | string          | 600px              | The width of the canvas element (use same css values)  |
| **@Input** [height]     | string          | 400px              | The height of the canvas element (use same css values) |
| **@Input** [theme]      | EnchartingTheme | undefined          | The theme of the chart                                 |
| **@Input** [fontFamily] | string          |                    | The Font Family of the chart                           |

# Output API

| Name                       | Type           | Description                                                                                              |
| -------------------------- | -------------- | -------------------------------------------------------------------------------------------------------- |
| **@Output** (onClick)      | ECElementEvent | Emits an ECElementEvent object when clicking on a component of the chart (for example a point of a line) |
| **@Output** (onBlankClick) | BasePoint      | Emits a BasePoint object when clicking on a blank space of the chart                                     |