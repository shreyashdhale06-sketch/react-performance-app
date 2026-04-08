## Performance Profiling

In this project, a heavy computation (loop) was used to simulate a performance bottleneck.

### Bottleneck
The calculation was expensive and slowed down rendering.

### Optimization
- useMemo was used to cache the result and avoid unnecessary recalculations.
- React.memo prevented unnecessary re-rendering of components.

### Result
The app performance improved by reducing redundant computations and renders.