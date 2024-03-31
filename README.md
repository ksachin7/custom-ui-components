# UI Fundamentals

This project aimed to create reusable UI components using React and styled-components. It includes a variety of components such as buttons, accordions, select dropdowns, spinners, and more. The components are designed to be highly customizable and support dark mode.

**Status:** in progress...

## Features

- Reusable UI components
- Built with React and styled-components
- Support for dark mode
- Easy to customize

![Preview: ](./src/assets/preview.gif)

### Components props with descriptions

##### GlobalStyles

Applies global styles to the application.

##### AppGridContainer

A container component that arranges its children in a grid layout.

##### Accordian

Displays an accordion component with a title and optional subtitle.

- `title`: Title of the accordion.
- `subtitle`: Subtitle or additional text for the accordion.
- `disableGutters`: Whether to remove gutter space from the accordion.
- `children`: Additional components to include in the accordion.

##### ButtonsGroup

Groups multiple buttons together.

- `children`: Additional components to include in the accordion.

##### Button

Displays a button with customizable variants, sizes, and colors.

- `variant`: Variant of the button ('outlined', 'contained', etc.).
- `size`: Size of the button ('sm', 'md', 'lg', etc.).
- `color`: Color of the button ('primary', 'secondary', etc.).
- `uppercase`: Whether to display the text in uppercase.

##### Card

A card component that displays content within a bordered container.

- `children`: Content to display within the card.
- `className`: Additional CSS classes to apply to the card.

##### CardHeader

Displays a header title for the card.

- `title`: Title text to display in the header.
- `subheader`: Subheader text to display below the title.
- `className`: Additional CSS classes to apply to the card header.

##### CardContent

Displays content within the card body.

- `children`: Content to display within the card body.
- `className`: Additional CSS classes to apply to the card content.

##### CardMedia

Displays media content (e.g., images) within the card.

- `image`: URL of the image to display.
- `title`: Alt text for the image.
- `className`: Additional CSS classes to apply to the card media container.

##### CardActions

Displays actions (e.g., buttons) at the bottom of the card.

- `children`: Action elements to display within the card actions container.

##### Navbar

Displays a navigation bar with a logo, title, and optional dark mode toggle.

- `logo`: Path to the logo image file.
- `title`: Title of the navbar.
- `children`: DarkModeToggle component.

##### Typography

Displays text with different variants.

- `variant`: Variant of the text (e.g., 'h1', 'body1', etc.)
- `className`: Additional CSS classes to apply to the text.

##### Select

Displays a select dropdown component with customizable options.

- `options`: Array of options for the select dropdown.
- `width`: Width of the select dropdown.
- `onChange`: Function to handle select dropdown changes.

##### Spinner

Displays a spinner component with customizable size and color.

- `type`: Type of spinner ('thin' or 'background').
- `size`: Size of the spinner.
- `color`: Color of the spinner.
