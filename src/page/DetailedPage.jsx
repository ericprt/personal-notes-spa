import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import DetailedNote from "../components/DetailedNote";
import { Link } from "react-router-dom";
import { getNote } from "../utils/data";

function DetailPageWrapper() {
  const { id } = useParams();

  return <DetailedPage id={id} />;
}

class DetailedPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: undefined,
    };

    this.onGetData = this.onGetData.bind(this);
  }

  componentDidMount() {
    this.onGetData();
  }

  onGetData() {
    const { note } = getNote(this.props.id);
    console.log(note);

    this.setState(() => {
      return {
        note: note,
      };
    });
  }

  render() {
    return (
      <>
        {this.state.note !== undefined ? (
          <>
            <DetailedNote {...this.state.note} />
            <div className="action">
              <Link to="/">
                <span className="material-symbols-outlined">exit_to_app</span>
              </Link>
            </div>
          </>
        ) : (
          <h1>not found</h1>
        )}
      </>
    );
  }
}

DetailedPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DetailPageWrapper;
