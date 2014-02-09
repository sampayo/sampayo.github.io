require 'i18n'

LOCALE = :en # set your locale
I18n.enforce_available_locales = true;
# I18n.available_locales = [:es, :en]

# Create folder "_locales" and put some locale file from https://github.com/svenfuchs/rails-i18n/tree/master/rails/locale
module Jekyll
  module I18nFilter
    # Example:
    #   {{ post.date | localize: "%d.%m.%Y" }}
    #   {{ post.date | localize: ":short" }}
    def localize(input, format=nil)
      # puts input + "\n"
      # print input.to_s + " " + format.to_s + "\n"
      load_translations
      format = (format =~ /^:(\w+)/) ? $1.to_sym : format

      if format
        I18n.l input, :format => format
      else
        I18n.t(input)
      end
    end
    alias_method :t, :localize

    def load_translations
      # unless I18n::backend.instance_variable_get(:@translations)
      I18n.backend.load_translations Dir[File.join(File.dirname(__FILE__),'../_locales/*.yml')]
      if @context.registers[:page]['lang']
        I18n.locale = @context.registers[:page]['lang'].intern
      else
        I18n.locale =LOCALE
      end
       # end
     end
   end
 end

 Liquid::Template.register_filter(Jekyll::I18nFilter)
