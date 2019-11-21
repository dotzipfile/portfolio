import React, {Component} from 'react';
import Card from '../../containers/Card/Card';
import classes from './Music.css';

class Music extends Component {
    render() {
        return (
            <Card>
                <ul className={classes.List}>
                    <li>
                        <h2>Wicked Game</h2>
                        <iframe title="Wicked Game" width="560" height="315" src="https://www.youtube.com/embed/z2l67EtTKxQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <hr />
                    </li>
                    <li>
                        <h2>High Hopes</h2>
                        <iframe title="High Hopes" width="560" height="315" src="https://www.youtube.com/embed/PA0XK1DM51g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <hr />
                    </li>
                    <li>
                        <h2>Amie</h2>
                        <iframe title="Amie" width="560" height="315" src="https://www.youtube.com/embed/alHarpr9X7g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </li>
                </ul>
            </Card>
        );
    }
}

export default Music;
