import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((monster) => {
          const { id, name, email } = monster;
          return (
            <div className="card-container" key={id}>
              <img
                src={`https://robohash.org/$.id}?set=set2&size180x180`}
                alt={`monster ${name}`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
