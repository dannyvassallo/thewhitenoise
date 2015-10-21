function detection(){
  if(navigator.vendor != null && navigator.vendor.match(/Apple Computer, Inc./) && navigator.userAgent.match(/iPhone/i) || (navigator.userAgent.match(/iPod/i)))

    {

        alert("Unfortunately, due to Apple's restrictions you may not be able to download this MP3 to your device. Feel free to give it a listen, or visit a computer to get your free download!");

    }

  else if(navigator.vendor != null && navigator.vendor.match(/Apple Computer, Inc./) && navigator.userAgent.match(/iPad/i))

    {

        alert("Unfortunately, due to Apple's restrictions you may not be able to download this MP3 to your device. Feel free to give it a listen, or visit a computer to get your free download!");

    }
};
