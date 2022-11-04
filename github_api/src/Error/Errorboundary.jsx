import React from 'react'
import broken from '../../Assets/broken.png'
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    // componentDidCatch(error, errorInfo) {
    //   // You can also log the error to an error reporting service
    //   logErrorToMyService(error, errorInfo);
    // }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <div className='w-screen bg-white h-screen absolute '>
                <div className=' translate-x-[-50%] translate-y-[-50%] absolute top-[40%] flex justify-center flex-col items-center left-[50%] border-4 px-20 py-[3rem] border-gray-600  text-center'>
                    <p className='font-[700] text-[30px]'>Apologies </p>
                    <img src={broken} />
                    <h1 className='mt-5'>
                      We are really sorry if you are able to see this page
                    </h1>
                    <h2 className='mt-5'>
                      Contact our Support @altchoolafrica on twitter so we can help you out.
                    </h2>
                </div>
                </div>;
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary