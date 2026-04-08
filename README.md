## Performance Profiling

To identify performance bottlenecks, React DevTools Profiler can be used. It helps in analyzing component render times and detecting unnecessary re-renders.

In this project, a heavy computation (loop) was introduced to simulate a performance bottleneck. Initially, the component re-rendered unnecessarily, causing performance issues.

To optimize this:

* **React.memo** was used to prevent unnecessary re-rendering of components.
* **useMemo** was used to memoize expensive calculations.

These optimizations significantly improved the rendering performance of the application.
