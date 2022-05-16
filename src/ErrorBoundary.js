import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="Error">
          <span>
            Please, paste <strong>valid</strong> comparison JSON.
          </span>
          <span>
            Use only generated JSON from gdd agreement golang tool to avoid
            parsing errors.
          </span>

          <button
            onClick={() => {
              window.location.reload(false);
            }}
          >
            Reload page
          </button>

          <span>{this.state.error.message}</span>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
