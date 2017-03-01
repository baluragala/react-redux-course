/**
 * Created by baluteju on 2/26/2017.
 */
import React from 'react';


/**
 * Stateless functional component
 * The traditional form, which submits data to server on form submit.
 * For SPA we would need to send form data async to server, so we would need
 * some JS function to handle form submission
 */

 const Form1 = () => {
    return <form>
        <label>
            Name:
            <input type="text" name="name"/>
        </label>
        <input type="submit" value="Submit"/>
    </form>
};

 export default Form1;