/**
 * ExpandifyCSS
 * An open-source project for creating expandable and collapsible sections using CSS Grid.
 *
 * @author Armen Nersisyan
 * @version 1.0.0
 */

/**
 * Toggle the expanded state of the section
 *
 * Toggles the 'expanded' class on the element with the class 'expandableSection'.
 */
const toggleExpandableSection = () => {
  // Query the element with class 'expandableSection' and toggle its 'expanded' class
  document.querySelector('.expandableSection').classList.toggle('expanded');
};

// Attach the toggle function to the button with the ID 'btn'
document.getElementById('btn').addEventListener('click', toggleExpandableSection);
