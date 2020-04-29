import _ from "lodash";

const component = () => {
    const el = document.createElement('div');

    el.innerHTML = _.join(['Hello','webpack'], ' ');

    return el;
}

document.body.appendChild(component());