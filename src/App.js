import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Draggable from 'react-draggable';
import './App.css';

function App() {
  return (
    <div className='container'>
      <h1 className='text-center'>Draggable Widgets</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <Draggable>
              <div className='box cursor'>
                I can be dragged anywhere
              </div>
            </Draggable>
          </div>
          <div className='col-md-6'>
            <Draggable axis="x">
              <div className='box cursor-x'>
                I can only be dragged horizonally (x axis)
              </div>
            </Draggable>
          </div>
          <div className='col-md-6'>
            <Draggable handle="strong">
              <div className="box no-cursor" style={{ display: 'flex', flexDirection: 'column' }}>
                <strong className="cursor"><div>Drag here</div></strong>
                <div style={{ overflow: 'scroll' }}>
                  <div style={{ background: 'yellow', whiteSpace: 'pre-wrap' }}>
                    I have long scrollable content with a handle
                    {'\n' + Array(40).fill('x').join('\n')}
                  </div>
                </div>
              </div>
            </Draggable>
          </div>
          <div className='col-md-6'>
            <Draggable cancel="strong">
              <div className='box cursor'>
                <strong className="no-cursor">Can't drag here</strong>
                <div>Dragging here works</div>
              </div>
            </Draggable>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
