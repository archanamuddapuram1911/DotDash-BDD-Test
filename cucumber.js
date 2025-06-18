module.exports = {
    default: {
      require: ['steps/**/*.ts',
        'support/hooks.ts',
        'support/world.ts'
      ], // your step definition files
      requireModule: ['ts-node/register'], // to allow TypeScript
      format: ['progress'], // or 'pretty', 'json:report.json', etc.
      paths: ['features/**/*.feature'],
      publishQuiet: true
    }
  };