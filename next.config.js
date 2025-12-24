module.exports = {
  async redirects () {
    return [
      {
        source: '/',
        destination: '/timesheet',
        permanent: true
      }
    ]
  },
  distDir: 'build',
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: false
    }
  },
  images: {
    unoptimized: true
  }
}
