function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error('Make sure the denominator is not 0.');
    }
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error('Make sure all arguments are numbers.');
    }
    return (numerator / denominator);
}

try {
    console.log('Result:', divide(20, 10));
} catch (error) {
    console.error('An error occurred!', error.message);
} finally {
    console.log('The task is complete');
}

try {
    console.log('Result:', divide(20, 0));
} catch (error) {
    console.error('An error occurred!', error.message);
} finally {
    console.log('The task is complete');
}

try {
    console.log('Result:', divide('some text', 10));
} catch (error) {
    console.error('An error occurred!', error.message);
} finally {
    console.log('The task is complete');
}